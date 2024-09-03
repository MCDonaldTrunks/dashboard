from django.contrib import admin

# Register your models here.
from .models import Workout, WorkoutRecord

@admin.register(Workout)
class WorkoutAdmin(admin.ModelAdmin):
    list_display = ('name', 'muscle_group', 'created_at')
    search_fields = ('name', 'muscle_group', 'equipment_needed')
    list_filter = ('muscle_group', 'created_at')

@admin.register(WorkoutRecord)
class WorkoutRecordAdmin(admin.ModelAdmin):
    list_display = ('user', 'workout', 'date_performed', 'time_started', 'time_ended', 'sets', 'reps_per_set', 'weight_used')
    search_fields = ('user__username', 'workout__name')
    list_filter = ('date_performed', 'workout', 'user')
