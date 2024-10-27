from django.contrib import admin

# Register your models here.
from .models import Picture



class PictureAdmin(admin.ModelAdmin):
    # Define how the model should be displayed in the list view in the admin
    list_display = ('id', 'description', 'user', 'uploaded_at')  # Replace with actual field names
    search_fields = ('description', 'user__username')  # Allow search by these fields

# Register the Picture model with the custom admin
admin.site.register(Picture, PictureAdmin)