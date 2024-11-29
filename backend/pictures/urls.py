from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PictureViewSet, AlbumViewSet

router = DefaultRouter()
router.register(r'pictures', PictureViewSet, basename='pictures')
router.register(r'albums', AlbumViewSet, basename='albums')

urlpatterns = [
    path('', include(router.urls)),
    path('upload/', PictureViewSet.as_view({'post': 'upload'}), name='picture-upload'),  # This line should remain
]
