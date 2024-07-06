export function Gallery() {
    return(
        <section className="py-16 flex flex-col item-center justify-content">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>

          <div className="h-96 carousel carousel-vertical rounded-box">
            <div className="carousel-item h-full">
              <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
            </div>
          </div>
        </div>
      </section>
    )
}