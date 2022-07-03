from rest_framework.serializers import ModelSerializer
from profiles.serializers import ProfileSerializer
from .models import Advertiser


class AdvertiserSerializer(ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = Advertiser
        fields = [
            'profile',
        ]
