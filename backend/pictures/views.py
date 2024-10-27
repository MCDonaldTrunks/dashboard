from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from .models import Picture
from .serializers import PictureSerializer
from rest_framework.decorators import action

class PictureViewSet(viewsets.ModelViewSet):
    """
    A viewset that provides the standard actions to manage pictures.
    """
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    @action(detail=False, methods=['post'], url_path='upload', permission_classes=[IsAuthenticated])
    def upload(self, request, *args, **kwargs):
        """
        A custom action to handle picture uploads.
        """
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=self.request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def perform_create(self, serializer):
        """
        Overriding perform_create to associate the picture with the user who uploaded it.
        """
        serializer.save(user=self.request.user)

    def get_queryset(self):
        """
        Only return pictures belonging to the logged-in user.
        """
        return Picture.objects.filter(user=self.request.user)

    def destroy(self, request, *args, **kwargs):
        """
        Ensure that the picture belongs to the requesting user before deleting.
        """
        instance = self.get_object()
        if instance.user != request.user:
            return Response({"error": "You do not have permission to delete this picture."},
                            status=status.HTTP_403_FORBIDDEN)
        return super().destroy(request, *args, **kwargs)



