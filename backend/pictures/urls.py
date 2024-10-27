from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PictureViewSet

# Create a router and register the PictureViewSet with it
router = DefaultRouter()
router.register(r'', PictureViewSet, basename='pictures')

# Define the urlpatterns for this app
urlpatterns = [
    path('', include(router.urls)),
    
    # Include all the viewset routes
]
