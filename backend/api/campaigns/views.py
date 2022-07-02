from rest_framework import viewsets
from rest_framework_extensions.mixins import NestedViewSetMixin
from .models import Campaign
from .serializers import CampaignSerializer


class CampaignViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Campaign instances.
    """
    serializer_class = CampaignSerializer
    queryset = Campaign.objects.all()
