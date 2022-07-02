from rest_framework import viewsets
from rest_framework_extensions.mixins import NestedViewSetMixin
from .models import Placement
from .serializers import PlacementSerializer


class PlacementViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Placement instances.
    """
    serializer_class = PlacementSerializer
    queryset = Placement.objects.all()
