from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .needs import needs

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
    return Response(needs)

@api_view(['GET'])
def getNeed(request, pk):
    need = None
    for i in needs:
        if i['_id'] == pk:
            need = i
            break

    return Response(need)