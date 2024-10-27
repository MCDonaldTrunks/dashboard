# pictures/models.py
from django.db import models
from django.conf import settings

class Picture(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='pictures/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=200, blank=True)  # Add more fields as needed

    def __str__(self):
        return f"Picture {self.id} by {self.user.username}"
