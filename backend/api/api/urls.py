from django.contrib import admin
from django.urls import include, path
from rest_framework_extensions.routers import ExtendedSimpleRouter

from platforms.views import PlatformViewSet
from placements.views import PlacementViewSet
from advertisers.views import AdvertiserViewSet
from campaigns.views import CampaignViewSet
from contracts.views import ContractViewSet
from channels.views import ChannelViewSet, ChannelStateViewSet


router = ExtendedSimpleRouter()

router.register(
    r'platforms',
    PlatformViewSet,
    basename='platform',
).register(
    r'placements',
    PlacementViewSet,
    basename='platform-placement',
    parents_query_lookups=['platform']
).register(
    r'contracts',
    ContractViewSet,
    basename='platform-placement-contract',
    parents_query_lookups=[
        'placement__platform',
        'placement',
    ]
)

router.register(
    r'advertisers',
    AdvertiserViewSet,
    basename='advertiser',
).register(
    r'campaigns',
    CampaignViewSet,
    basename='advertiser-campaign',
    parents_query_lookups=['advertiser']
).register(
    r'contracts',
    ContractViewSet,
    basename='advertiser-campaign-contract',
    parents_query_lookups=[
        'campaign__advertiser',
        'campaign',
    ]
)

router.register(
    r'contracts',
    ContractViewSet,
    basename='contract',
).register(
    r'channels',
    ChannelViewSet,
    basename='contract-channel',
    parents_query_lookups=['contract']
).register(
    r'states',
    ChannelStateViewSet,
    basename='contract-channel-state',
    parents_query_lookups=[
        'channel__contract',
        'channel',
    ]
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
