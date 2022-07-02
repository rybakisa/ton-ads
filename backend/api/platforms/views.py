from rest_framework import viewsets
from rest_framework_extensions.mixins import NestedViewSetMixin
from .models import Platform
from .serializers import PlatformSerializer


class PlatformViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Platform instances.
    """
    serializer_class = PlatformSerializer
    queryset = Platform.objects.all()
