from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Need

# this serializer wraps around the 'Need' model and serializes the data that is
# returned from the DB so that it can be passed to the front-end as JSON data.
class NeedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Need
        fields = '__all__' 