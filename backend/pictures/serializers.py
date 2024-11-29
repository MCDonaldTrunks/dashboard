from rest_framework import serializers
from .models import Picture, Album
from rest_framework.serializers import SerializerMethodField


# Album serializer
class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ['id', 'name', 'description', 'created_at', 'user']
        read_only_fields = ['user']


# Picture serializer
class PictureSerializer(serializers.ModelSerializer):
    image_url = SerializerMethodField()
    
    class Meta:
        model = Picture
        fields = ['id', 'user', 'image', 'description', 'album', 'uploaded_at', 'image_url']
        read_only_fields = ['user']

    
    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None