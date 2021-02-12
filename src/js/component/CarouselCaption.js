import React from "react";

export function CarouselCaption() {
	return (
		<div className="bd-example">
			<div
				id="carouselExampleCaptions"
				className="carousel slide"
				data-ride="carousel">
				<ol className="carousel-indicators">
					<li
						data-target="#carouselExampleCaptions"
						data-slide-to="0"
						className="active"></li>
					<li
						data-target="#carouselExampleCaptions"
						data-slide-to="1"></li>
				</ol>
				<div className="carousel-inner" role="listbox">
					<div className="carousel-item active">
						<img
							className="d-block w-100"
							src="https://www.emprendiendohistorias.com/wp-content/uploads/2018/03/encuestas-pagadas-dinero.jpg"
							alt="First slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="https://www-randstad-es.s3.amazonaws.com/wp-content/uploads/2019/06/C%C3%B3mo-afecta-la-psicolog%C3%ADa-en-el-trabajo-880x450.jpg"
							alt="Second slide"
						/>
						<div className="carousel-caption d-none d-md-block"></div>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleCaptions"
					role="button"
					data-slide="prev">
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleCaptions"
					role="button"
					data-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
}
