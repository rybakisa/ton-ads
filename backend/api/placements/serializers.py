from rest_framework.serializers import ModelSerializer
from .models import Placement


class PlacementSerializer(ModelSerializer):
    class Meta:
        model = Placement
        fields = '__all__'
