import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="py-5 text-center text-white"
      style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); min-height: 60vh; display: flex; align-items: center;">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="mb-4" style="font-size: 4rem;">⚡</div>
            <h1 class="display-3 fw-bold mb-3">
              Angular <span style="color: #e94560;">Practice</span> Hub
            </h1>
            <p class="lead fs-4 mb-4 text-white-50">
              Explorá Reactive Forms, Routing y Standalone Components en acción.
              Un playground para aprender Angular de verdad.
            </p>
            <a routerLink="/login" class="btn btn-lg px-5 py-3 fw-semibold"
              style="background: #e94560; border: none; color: white; border-radius: 50px; transition: transform 0.2s, box-shadow 0.2s;"
              onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 25px rgba(233,69,96,0.4)'"
              onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
              Empezar ahora →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-5 bg-dark">
      <div class="container">
        <h2 class="text-center text-white fw-bold mb-2">¿Qué vas a practicar?</h2>
        <p class="text-center text-white-50 mb-5">Conceptos clave de Angular 21 en un solo lugar</p>

        <div class="row g-4 justify-content-center">

          <!-- Card 1: Reactive Forms -->
          <div class="col-md-4">
            <div class="card h-100 border-0 text-center p-4"
              style="background: #16213e; border-radius: 16px; transition: transform 0.2s, box-shadow 0.2s;"
              onmouseover="this.style.transform='translateY(-6px)';this.style.boxShadow='0 12px 30px rgba(0,0,0,0.4)'"
              onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
              <div class="card-body">
                <div class="mb-3" style="font-size: 3rem;">📋</div>
                <h5 class="card-title text-white fw-bold mb-3">Reactive Forms</h5>
                <p class="card-text text-white-50">
                  FormGroup, FormControl, validators síncronos y asíncronos.
                  El enfoque robusto para manejar formularios complejos.
                </p>
              </div>
              <div class="card-footer border-0 pb-3" style="background: transparent;">
                <span class="badge px-3 py-2" style="background: rgba(233,69,96,0.2); color: #e94560; border-radius: 50px;">
                  @angular/forms
                </span>
              </div>
            </div>
          </div>

          <!-- Card 2: Routing -->
          <div class="col-md-4">
            <div class="card h-100 border-0 text-center p-4"
              style="background: #16213e; border-radius: 16px; transition: transform 0.2s, box-shadow 0.2s;"
              onmouseover="this.style.transform='translateY(-6px)';this.style.boxShadow='0 12px 30px rgba(0,0,0,0.4)'"
              onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
              <div class="card-body">
                <div class="mb-3" style="font-size: 3rem;">🗺️</div>
                <h5 class="card-title text-white fw-bold mb-3">Routing</h5>
                <p class="card-text text-white-50">
                  Rutas lazy, guards, resolvers y navegación programática.
                  Arquitectura de navegación limpia y escalable.
                </p>
              </div>
              <div class="card-footer border-0 pb-3" style="background: transparent;">
                <span class="badge px-3 py-2" style="background: rgba(233,69,96,0.2); color: #e94560; border-radius: 50px;">
                  @angular/router
                </span>
              </div>
            </div>
          </div>

          <!-- Card 3: Standalone Components -->
          <div class="col-md-4">
            <div class="card h-100 border-0 text-center p-4"
              style="background: #16213e; border-radius: 16px; transition: transform 0.2s, box-shadow 0.2s;"
              onmouseover="this.style.transform='translateY(-6px)';this.style.boxShadow='0 12px 30px rgba(0,0,0,0.4)'"
              onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
              <div class="card-body">
                <div class="mb-3" style="font-size: 3rem;">🧩</div>
                <h5 class="card-title text-white fw-bold mb-3">Standalone</h5>
                <p class="card-text text-white-50">
                  Componentes sin NgModule, imports directos y árbol de dependencias
                  explícito. El futuro de Angular.
                </p>
              </div>
              <div class="card-footer border-0 pb-3" style="background: transparent;">
                <span class="badge px-3 py-2" style="background: rgba(233,69,96,0.2); color: #e94560; border-radius: 50px;">
                  standalone: true
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA Bottom -->
    <section class="py-5 text-center" style="background: #0f0f0f;">
      <div class="container">
        <h3 class="text-white fw-bold mb-2">¿Listo para practicar?</h3>
        <p class="text-white-50 mb-4">Ingresá con tu cuenta y empezá a explorar.</p>
        <a routerLink="/login" class="btn btn-outline-light btn-lg px-5" style="border-radius: 50px;">
          Ir al Login
        </a>
      </div>
    </section>
  `,
})
export class HomeComponent {}
