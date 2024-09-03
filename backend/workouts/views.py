from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Workout, WorkoutRecord
from .serializers import WorkoutSerializer, WorkoutRecordSerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer

class WorkoutRecordViewSet(viewsets.ModelViewSet):
    queryset = WorkoutRecord.objects.all()
    serializer_class = WorkoutRecordSerializer
