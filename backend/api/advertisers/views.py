from rest_framework import viewsets
from rest_framework_extensions.mixins import NestedViewSetMixin
from .models import Advertiser
from .serializers import AdvertiserSerializer


class AdvertiserViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Advertiser instances.
    """
    serializer_class = AdvertiserSerializer
    queryset = Advertiser.objects.all()
