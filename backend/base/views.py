from django.shortcuts import render
from django.http import JsonResponse
from .needs import needs

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
    return JsonResponse(routes, safe=False)

def getNeeds(request):
    return JsonResponse(needs, safe=False)