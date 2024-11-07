from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('contact/', views.contact, name='contact'), 
    path('about/', views.about, name='about'), 
    path('service/', views.service, name='service'), 
    path('jobapp/', views.jobapp, name='jobapp'),
    path('secondcitizenship/', views.secondcitizenship, name='secondcitizenship'), 
    path('uaesetup/', views.uaesetup, name='uaesetup'),
    path('ourothers/', views.ourothers, name='ourothers'),
    path('ourpost/', views.ourpost, name='ourpost'),
]