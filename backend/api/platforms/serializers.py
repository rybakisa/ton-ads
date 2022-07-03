from rest_framework.serializers import ModelSerializer
from profiles.serializers import ProfileSerializer
from .models import Platform


class PlatformSerializer(ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = Platform
        fields = [
            'profile',
        ]
