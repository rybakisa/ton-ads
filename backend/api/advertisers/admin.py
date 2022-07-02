from django.contrib import admin
from campaigns.models import Campaign
from .models import Advertiser


class CampaignInline(admin.StackedInline):
    model = Campaign
    extra = 1


@admin.register(Advertiser)
class AdvertiserAdmin(admin.ModelAdmin):
    inlines = [
        CampaignInline,
    ]
