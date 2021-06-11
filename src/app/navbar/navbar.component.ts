import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import * as $ from 'jquery';
import { event } from 'jquery';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

    let wScroll: any
    let portofolioOffset: any
    let aboutOffset: any
    let contactOffser: any
    portofolioOffset = $("#Portofolio").offset()?.top
    aboutOffset = $("#about").offset()?.top
    contactOffser = $("#ContactMe").offset()?.top


    $('#navPortfolio').click(function () {
      $('html, body').animate({ scrollTop: portofolioOffset }, '3000');
    });
    $('#navAbout').click(function () {
      $('html, body').animate({ scrollTop: aboutOffset }, '3000');
    });
    $('#navContact').click(function () {
      $('html, body').animate({ scrollTop: contactOffser }, '3000');
    });

    $(window).on("scroll", function () {
      wScroll = $(window).scrollTop();
      if (wScroll >= 50) {
        $("nav").addClass("navbar-shrink")
      }
      else {
        $("nav").removeClass("navbar-shrink")
      }


    })

  }


}


function scrollToElement($element: any) {
  throw new Error('Function not implemented.');
}

