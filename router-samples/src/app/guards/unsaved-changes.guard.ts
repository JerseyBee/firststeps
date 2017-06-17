import { CanDeactivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {ProductDetailComponent} from "../product.component";

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductDetailComponent>{

    constructor(private _router:Router){}

    canDeactivate(component: ProductDetailComponent){

        return window.confirm("You have unsaved changes. Still want to leave?");

    }
}











/*
canDeactivate(component: ProductDetailComponent, currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot){

  let canLeave: boolean = true;

  // If the user wants to go to home component
  if (nextState.url === '/') {
    canLeave = window.confirm("You have unsaved changes. Still want to go home?");
  }
  return canLeave;

}*/
