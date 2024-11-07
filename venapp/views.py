from django.shortcuts import render
from django.http import HttpResponse
from .models import Contact
# Create your views here.

def home(request):
    return render(request,'home.html')
    
def contact(request):
    if request.method == "POST":
        Afname=request.POST.get('fname')
        AcontactEmail=request.POST.get('contactEmail')
        Asubject=request.POST.get('subject')
        Amessage=request.POST.get('message')
        query=Contact(fname=Afname,contactEmail=AcontactEmail,subject=Asubject,message=Amessage)
        query.save()
    return render(request,'contact.html')

def about(request):
    return render(request,'about.html')
def service(request):
    return render(request,'service.html')
def jobapp(request):
    return render(request,'jobapp.html')
def secondcitizenship(request):
    return render(request,'secondcitizenship.html')
def uaesetup(request):
    return render(request,'uaesetup.html')
def ourothers(request):
    return render(request,'ourothers.html')
def ourpost(request):
    return render(request,'ourpost.html')