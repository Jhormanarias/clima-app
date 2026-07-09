import { useEffect, useRef, useState } from "react";
import './styles/HomePage.css';
import producto1 from '../assets/home/imágenes/Producto_01.jpg';
import producto2 from '../assets/home/imágenes/Producto_02.jpg';
import producto3 from '../assets/home/imágenes/Producto_03.jpg';
import resistencia from '../assets/home/iconos/Resistencia.png';
import proteccion from '../assets/home/iconos/Proteccion-quimicos.png';
import impermeabilidad from '../assets/home/iconos/Impermeabilidad.png';
import instalacion from '../assets/home/iconos/instalacion.png';
import logo from '../assets/home/Logos/Logo-Hero.png';
import carrito from '../assets/home/iconos/Cariito.png';
import { AddButton } from '../components/AddButton';

export const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);
    return (
        <div>
            <header class="hero">
                <div class="hero__overlay"></div>

                <nav
                    ref={navbarRef}
                    className={`navbar container ${isOpen ? "is-open" : ""}`}
                >
                    <div className="logo">
                        <img src={logo} alt="Logo de KORALTEC" />
                    </div>

                    <button
                        type="button"
                        className="nav-toggle"
                        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={isOpen}
                        aria-controls="primary-navigation"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul className="nav-links" id="primary-navigation">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Media Caña</a></li>
                        <li><a href="#">Láminas de impacto</a></li>
                        <li><a href="#">Normativas</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Iniciar sesión</a></li>

                        <li className="nav-links__store-mobile">
                            <a href="#" className="store-btn">
                                <span>Tienda</span>
                                <span className="store-btn__icon">
                                    <img src={carrito} alt="Tienda" />
                                </span>
                                <span className="store-btn__badge">5</span>
                            </a>
                        </li>
                    </ul>

                    <a href="#" className="store-btn store-btn--desktop">
                        <span>Tienda</span>
                        <span className="store-btn__icon">
                            <img src={carrito} alt="Tienda" />
                        </span>
                        <span className="store-btn__badge">5</span>
                    </a>
                </nav>

                <div class="hero__content container">
                    <div class="hero__left">
                        <p class="hero__eyebrow">Protección técnica para<br />espacios de alto desempeño.</p>

                        <h1 class="hero__title hero__title--light">
                            MEDIA CAÑA<br />
                            SANITARIA
                        </h1>

                        <h2 class="hero__title hero__title--strong">
                            LÁMINAS DE<br />
                            ALTO IMPACTO
                        </h2>

                        <a href="#" class="cta-btn">
                            Ir a la tienda
                            <span>➜</span>
                        </a>
                    </div>

                    <div class="hero__right">
                        <div class="hotspot hotspot--top">
                            <span class="dot"></span>
                            <span class="line"></span>
                            <span class="tag">Láminas de alto impacto</span>
                        </div>

                        <div class="hotspot hotspot--mid-left">
                            <span class="dot"/>
                            <span class="line"/>
                            <span class="tag">Cubre borde</span>
                        </div>

                        <div class="hotspot hotspot--main">
                            <span class="tag tag--orange">Guarda camillas</span>
                            <span class="line line--angled"/>
                            <span class="line"/>
                            <span class="dot dot--orange"/>
                        </div>

                        <div class="hotspot hotspot--bottom">
                            <span class="dot"/>
                            <span class="line"/>
                            <span class="line line--bottom"/>
                            <span class="tag">Media caña</span>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section class="about">
                    <div class="container">
                        <div class="section-label">
                            <span>Somos KORALTEC</span>
                            <div class="section-label__line"/>
                        </div>

                        <h3 class="about__title">
                            MÁS DE 10 AÑOS DE EXPERIENCIA DESARROLLANDO PRODUCTOS DE CALIDAD
                            CUMPLIENDO CON LAS MÁS ALTAS EXIGENCIAS DE HINIENE, RESISTENCIA Y
                            DURABILIDAD.
                        </h3>
                        
                        <p class="about__text">
                            Somos fabricantes especialistas en media caña sanitaria, láminas de impacto y
                            soluciones arquitectónicas desarrolladas para
                            <span> entornos hospitalarios, comerciales e industriales.</span>
                        </p>

                        <div class="features">
                            <article class="feature-card">
                                <div class="feature-icon"><img src={resistencia} alt="Resistencia a golpes" /></div>
                                <p>Resistencia<br />a golpes</p>
                            </article>

                            <article class="feature-card">
                                <div class="feature-icon"><img src={proteccion} alt="Protección contra agentes químicos" /></div>
                                <p>Protección contra<br />agentes químicos</p>
                            </article>

                            <article class="feature-card">
                                <div class="feature-icon"><img src={impermeabilidad} alt="Impermeabilidad total" /></div>
                                <p>Impermeabilidad<br />total</p>
                            </article>

                            <article class="feature-card">
                                <div class="feature-icon"><img src={instalacion} alt="Fácil instalación" /></div>
                                <p>Fácil<br />instalación</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section class="products">
                    <div class="container">
                        <div class="section-label section-label--dark">
                            <span>Destacados DEL MES</span>
                        </div>

                        <div class="products-grid">
                            <article class="product-card">
                                <div class="product-card__image">
                                    <img src={producto1} alt="Guardacamillas" />
                                    <AddButton />
                                </div>
                                <div class="product-card__info">
                                    <h4>Guardacamillas</h4>
                                    <div class="price-box">
                                        <span>Desde</span>
                                        <strong>$123.456</strong>
                                    </div>
                                </div>
                            </article>

                            <article class="product-card">
                                <div class="product-card__image">
                                    <img src={producto2} alt="Láminas de alto impacto" />
                                    <AddButton />
                                </div>
                                <div class="product-card__info">
                                    <h4>Láminas de<br />alto impacto</h4>
                                    <div class="price-box">
                                        <span>Desde</span>
                                        <strong>$123.456</strong>
                                    </div>
                                </div>
                            </article>

                            <article class="product-card">
                                <div class="product-card__image">
                                    <img src={producto3} alt="Uniones" />
                                    <AddButton />
                                </div>
                                <div class="product-card__info">
                                    <h4>Uniones</h4>
                                    <div class="price-box">
                                        <span>Desde</span>
                                        <strong>$123.456</strong>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
