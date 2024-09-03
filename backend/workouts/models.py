from django.db import models

# Create your models here.
from django.contrib.auth import get_user_model

# Assuming you have a custom user model or using Django's default User model
User = get_user_model()

class Workout(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    muscle_group = models.CharField(max_length=100, blank=True, null=True)
    equipment_needed = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class WorkoutRecord(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='workout_records')
    workout = models.ForeignKey(Workout, on_delete=models.CASCADE, related_name='records')
    date_performed = models.DateTimeField(auto_now_add=True)
    time_started = models.DateTimeField()
    time_ended = models.DateTimeField()
    sets = models.PositiveIntegerField()
    reps_per_set = models.PositiveIntegerField()
    weight_used = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)  # Optional, depending on workout type
    notes = models.TextField(blank=True, null=True)  # Any additional notes for the workout

    def __str__(self):
        return f"{self.user.username} - {self.workout.name} on {self.date_performed.strftime('%Y-%m-%d')}"

    class Meta:
        ordering = ['-date_performed']

    @property
    def duration(self):
        """Calculate the duration of the workout session."""
        return self.time_ended - self.time_started if self.time_ended and self.time_started else None