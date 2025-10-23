
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const BreadcrumbCourses = ({title, subtitle} : any) => {
  return (
    <>
        <section className="breadcrumb-wrapper courses-page-banner">
            <div className="shape-1">
                <Image src="assets/img/breadcrumb/shape-1.png" alt="Web Design"width={230}   height={150} />
            </div>
            <div className="shape-2">
                <Image src="assets/img/breadcrumb/shape-2.png" alt="Web Design"width={230}   height={150} />
            </div>
            <div className="shape-3">
                <Image src="assets/img/breadcrumb/shape-3.png" alt="Web Design"width={230}   height={150} />
            </div>
            <div className="dot-shape">
                <Image src="assets/img/breadcrumb/dot-shape.png" alt="Web Design"width={230}   height={150} />
            </div>
            <div className="vector-shape">
                <Image src="assets/img/breadcrumb/Vector.png" alt="Web Design"width={230}   height={150} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="page-heading">
                        <h1>{title}</h1>
                        <ul className="breadcrumb-items">
                            <li><Link href="/">Home</Link></li>
                            <li className="style-2">{subtitle}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default BreadcrumbCourses;