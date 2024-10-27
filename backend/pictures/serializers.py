# serializers.py
from rest_framework import serializers
from .models import Picture

class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Picture
        fields = ['id', 'user', 'description', 'image', 'uploaded_at']
        read_only_fields = ['user']  # Let the backend set this field




