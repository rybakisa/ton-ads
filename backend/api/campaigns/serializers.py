from rest_framework.serializers import ModelSerializer
from .models import Campaign


class CampaignSerializer(ModelSerializer):
    class Meta:
        model = Campaign
        fields = '__all__'
