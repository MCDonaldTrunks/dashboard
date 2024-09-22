from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth.models import User

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
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=200)
        except Exception as e:
            return Response(status=400)

@api_view(['GET'])
def sample_data(request):
    return Response({'message': 'Hello from Django!'})



@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')
    
    if not username or not password:
        return Response({"error": "Username and password are required"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.create_user(username=username, password=password)
        refresh = RefreshToken.for_user(user)
        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }, status=status.HTTP_201_CREATED)
    except:
        return Response({"error": "User could not be created"}, status=status.HTTP_400_BAD_REQUEST)