from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import permission_classes, api_view
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt

# Get the correct user model
User = get_user_model()

class LoginView(TokenObtainPairView):
    """
    View for user login (sign-in) using JWT authentication.
    """

class LogoutView(APIView):
    """
    View for logging out the user by blacklisting the token.
    """
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            refresh_token = request.data.get("refresh")
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({"message": "User logged out successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([AllowAny])  # Public endpoint for testing
def sample_data(request):
    return Response({'message': 'Hello from Django!'})


import logging
logger = logging.getLogger(__name__)


@permission_classes([AllowAny])  # Ensure public access for registration
@api_view(['POST'])
def register(request):
    print("Reached register endpoint")
    username = request.data.get('username')
    print(f"Username: {username}")
    logger.debug(f"Request headers: {request.headers}")
    logger.debug(f"CSRF cookie: {request.COOKIES.get('csrftoken')}")
    
    password = request.data.get('password')
    password2 = request.data.get('password2')
    email = request.data.get('email')

    if not username or not password:
        return Response({"error": "Username and password are required"}, status=status.HTTP_400_BAD_REQUEST)

    if password != password2:
        return Response({"error": "Passwords do not match"}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(email=email).exists():
        return Response({"error": "Email already registered"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.create_user(username=username, password=password, email=email)
        user.save()

        # Optionally, automatically log in the user after registration
        refresh = RefreshToken.for_user(user)
        return Response({
            "message": "User registered successfully",
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "username": user.username,
            "email": user.email
        }, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"error": f"User could not be created: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
