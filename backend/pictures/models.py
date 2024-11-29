from django.db import models
from django.conf import settings
import os

# Function to define user directory path for picture uploads
def user_directory_path(instance, filename):
    return f'pictures/{instance.user.id}/{filename}'

class Album(models.Model):
    name = models.CharField(max_length=100)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Picture(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=user_directory_path, blank=True)
    description = models.TextField(blank=True)
    album = models.ForeignKey(Album, on_delete=models.CASCADE, related_name='pictures', null=True, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Picture {self.id} by {self.user.username}'

    def delete(self, *args, **kwargs):
        if os.path.isfile(self.image.path):
            os.remove(self.image.path)
        super().delete(*args, **kwargs)
