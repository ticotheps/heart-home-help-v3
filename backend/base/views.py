from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Need
from .needs import needs
from .serializers import NeedSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/needs/',
        '/api/needs/create/',
        
        '/api/needs/upload/',
        
        '/api/needs/top/',
        '/api/needs/<id>/',
        
        '/api/needs/delete/<id>/',
        '/api/needs/<update>/<id>/',
    ]
    return Response(routes)

@api_view(['GET'])
def getNeeds(request):
    # retrieves all of the 'Need' objects within the DB
    needs = Need.objects.all()
    # serializes multiple 'Need' objects
    serializer = NeedSerializer(needs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getNeed(request, pk):
    need = Need.objects.get(_id=pk)
    # serializes only a single 'Need' object
    serializer = NeedSerializer(need, many=False)
    return Response(serializer.data)