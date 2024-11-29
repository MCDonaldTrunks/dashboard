from django.contrib import admin
from .models import Picture, Album

@admin.register(Picture)
class PictureAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'album', 'uploaded_at', 'image']
    list_filter = ['user', 'album']
    search_fields = ['description']

@admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'user', 'created_at']
    search_fields = ['name', 'description']
    list_filter = ['user']