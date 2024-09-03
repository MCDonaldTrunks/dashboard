from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WorkoutViewSet, WorkoutRecordViewSet

router = DefaultRouter()
router.register(r'workouts', WorkoutViewSet)
router.register(r'workout-records', WorkoutRecordViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
