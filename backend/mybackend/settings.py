"""
Django settings for mybackend project.

Generated by 'django-admin startproject' using Django 5.0.7.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.0/ref/settings/
"""

from pathlib import Path
from datetime import timedelta  # Used for JWT settings
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# ==========================
# GENERAL SETTINGS
# ==========================

# Security settings
SECRET_KEY = 'django-insecure-b1h72&#otpxt(s)dhnp66va=(zj1@s844og9amgx)()j&gs($e'
DEBUG = True
ALLOWED_HOSTS = []

# ==========================
# APPLICATION DEFINITION
# ==========================

INSTALLED_APPS = [
    'jazzmin',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'dashboard',
    'userauths',
    'workouts',
    # Third-party apps
    'rest_framework',  # Django REST Framework
    'rest_framework_simplejwt',  # JWT Authentication
    'corsheaders',  # CORS headers
    'pictures',  # Image uploads
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # Moved CORS middleware above CSRF middleware
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',  # Ensure CSRF comes after CORS
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'mybackend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'mybackend.wsgi.application'

# ==========================
# DATABASE CONFIGURATION
# ==========================

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'dashboard_db',
        'USER': 'juicypope',
        'PASSWORD': 'Falconpunch_1',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

# ==========================
# AUTHENTICATION SETTINGS
# ==========================

# Custom user model
AUTH_USER_MODEL = 'userauths.User'

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
        'OPTIONS': {
            'min_length': 8,  # Minimum 8 characters
        },
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# ==========================
# DJANGO REST FRAMEWORK CONFIGURATION
# ==========================

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',  # Enable JWT globally
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',  # Global authentication enforced
    ),
    'DEFAULT_PARSER_CLASSES': [
        'rest_framework.parsers.JSONParser',
    ],
    
}

# Simple JWT settings (for token lifetime customization)
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=5),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
}

# ==========================
# CORS AND CSRF SETTINGS
# ==========================

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',  # React frontend origin
]

CSRF_TRUSTED_ORIGINS = [
    'http://localhost:3000',  # Frontend domain for CSRF tokens
]

# ==========================
# INTERNATIONALIZATION
# ==========================

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# ==========================
# STATIC FILES CONFIGURATION
# ==========================

STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / "static"]
STATIC_ROOT = BASE_DIR / "staticfiles"

# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# ==========================
# JAZZMIN ADMIN UI SETTINGS
# ==========================

JAZZMIN_SETTINGS = {
    "site_title": "My Admin",
    "site_header": "My Admin",
    "site_brand": "My Brand",
    "welcome_sign": "Welcome to My Admin",
    "copyright": "My Company",
    "user_avatar": None,
    # Top menu links
    "topmenu_links": [
        {"name": "Home", "url": "admin:index", "permissions": ["auth.view_user"]},
        {"name": "Support", "url": "https://support.example.com", "new_window": True},
    ],
    # Side menu
    "icons": {
        "auth": "fas fa-users-cog",
        "auth.user": "fas fa-user",
        "auth.Group": "fas fa-users",
    },
}

JAZZMIN_UI_TWEAKS = {
    "navbar_small_text": False,
    "footer_small_text": False,
    "body_small_text": False,
    "brand_small_text": False,
    "brand_colour": "navbar-info",
    "accent": "accent-maroon",
    "navbar": "navbar-navy navbar-dark",
    "no_navbar_border": True,
    "navbar_fixed": True,
    "layout_boxed": False,
    "footer_fixed": False,
    "sidebar_fixed": True,
    "sidebar": "sidebar-dark-navy",
    "sidebar_nav_small_text": False,
    "sidebar_disable_expand": False,
    "sidebar_nav_child_indent": True,
    "sidebar_nav_compact_style": False,
    "sidebar_nav_legacy_style": False,
    "sidebar_nav_flat_style": False,
    "theme": "cyborg",
    "dark_mode_theme": "cyborg",
    "button_classes": {
        "primary": "btn-primary",
        "secondary": "btn-secondary",
        "info": "btn-info",
        "warning": "btn-warning",
        "danger": "btn-danger",
        "success": "btn-success"
    },
    "theme_switcher": False
}


MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')