from django.db import models

# Create your models here.

from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    # Add any additional fields if needed
    pass

class Recording(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='recordings')
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
