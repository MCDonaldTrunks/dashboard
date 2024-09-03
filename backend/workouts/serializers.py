from rest_framework import serializers
from .models import Workout, WorkoutRecord

class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = '__all__'

class WorkoutRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutRecord
        fields = '__all__'
