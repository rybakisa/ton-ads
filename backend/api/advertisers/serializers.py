from rest_framework.serializers import ModelSerializer
from .models import Advertiser


class AdvertiserSerializer(ModelSerializer):
    class Meta:
        model = Advertiser
        fields = '__all__'
