import { motion } from "motion/react"
import { useState } from "react"

type Product = {
  name: string
  description: string
  status: string
  main: string
  images: string[]
}

export default function Products() {

  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [open, setOpen] = useState<boolean>(false)

  const products: Product[] = [
    {
      name: "Blue Canon",
      description:
        "Blue Canon is a futuristic ocean-inspired mechanical keyboard design focused on deep blue gradients, crystal lighting and clean modern aesthetics.",
      status:
        "This product is still in complectation stage. Waiting for production and first customer release.",
      main: "img/selfproduct/firstproduct/bluecanonkey.png",
      images: [
        "img/selfproduct/firstproduct/bluecanonkey.png",
        "img/selfproduct/firstproduct/bluecanon60%.png",
      ]
    },

    {
      name: "Wild Pirate",
      description:
        "Wild Pirate combines aggressive dark tones with gold accents and a chaotic pirate-inspired visual identity made for gamers and collectors.",
      status:
        "This product is still in complectation stage. Waiting for production and first customer release.",
      main: "img/selfproduct/second/wildpirate.png",
      images: [
        "img/selfproduct/second/wildpirate.png",
        "img/selfproduct/second/Wildpirate60%.png",
      ]
    },

    {
      name: "Glass Chron",
      description:
        "Glass Chron focuses on transparent futuristic visuals mixed with chrome metallic details and sharp reflections for a premium appearance.",
      status:
        "This product is still in complectation stage. Waiting for production and first customer release.",
      main: "img/selfproduct/third/glasschron.png",
      images: [
        "img/selfproduct/third/glasschron.png",
        "img/selfproduct/third/glasschron60%.png",
      ]
    },

    {
      name: "Vulcan Tenkai",
      description:
        "Vulcan Tenkai is inspired by volcanic energy, lava lighting effects and strong industrial mechanical aesthetics with heavy contrast.",
      status:
        "This product is still in complectation stage. Waiting for production and first customer release.",
      main: "img/selfproduct/fourth/vulkantenkai.png",
      images: [
        "img/selfproduct/fourth/vulkantenkai.png",
        "img/selfproduct/fourth/vulkantenkai60%.png",
      ]
    },

    {
      name: "Blue Emerland Splash",
      description:
        "Blue Emerland Splash mixes emerald green reflections with deep aquatic blue lighting to create a clean luxury keyboard concept.",
      status:
        "This product is still in complectation stage. Waiting for production and first customer release.",
      main: "img/selfproduct/fifth/blueemerland-splash.png",
      images: [
        "img/selfproduct/fifth/blueemerland-splash.png",
        "public/img/selfproduct/fifth/blueemerlandesc.png",
      ]
    }
  ]

  function openGallery(images: string[]): void {
    setSelectedImages(images)
    setOpen(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: "20%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-full h-auto p-[2%]"
    >

      <div className="w-full h-auto flex flex-col gap-6 bg-indigo-950 rounded-[25px] p-[4%]">

        <h1 className="text-[12vw] sm:text-[8vw] lg:text-[5vw] text-white">
          Project Manji Key
        </h1>

        <p className="w-full lg:w-[60%] text-[4vw] sm:text-[2.5vw] lg:text-[1.6vw] text-gray-300">
          Our first designed keyboard collection focused on futuristic aesthetics,
          mechanical engineering and premium visual identity.
        </p>

        {products.map((product: Product, index: number) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: "10%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.8 }}
            className="w-full h-auto lg:h-[80vh] flex flex-col lg:flex-row rounded-[25px] overflow-hidden shadow-2xl shadow-black bg-black/30"
          >

            <div
              className="w-full lg:w-[50%] h-75 sm:h-100 lg:h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${product.main})`
              }}
            />

            <div className="w-full lg:w-[50%] h-full flex flex-col gap-6 p-[5%]">

              <h2 className="text-[8vw] sm:text-[5vw] lg:text-[3vw] text-white">
                {product.name}
              </h2>

              <p className="text-[4vw] sm:text-[2.5vw] lg:text-[1.2vw] text-gray-400 leading-[180%]">
                {product.description}
              </p>

              <motion.button
                onClick={() => openGallery(product.images)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-[60%] lg:w-[40%] h-13.75 bg-gray-900 text-white rounded-[25px] border border-gray-700"
              >
                View more images
              </motion.button>

              <p className="text-[3.5vw] sm:text-[2vw] lg:text-[1vw] text-gray-300">
                <strong>Status:</strong> {product.status}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

      {open && (

        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-[3%]">

          <div className="w-full lg:w-[85%] h-[90%] bg-gray-950 rounded-[25px] p-[4%] overflow-auto">

            <div className="w-full flex justify-end">

              <button
                onClick={() => setOpen(false)}
                className="text-white text-[8vw] sm:text-[5vw] lg:text-[2vw]"
              >
                ✕
              </button>

            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-[2%]">

              {selectedImages.map((img: string, index: number) => (

                <motion.img
                  key={index}
                  src={img}
                  alt=""
                  className="w-full h-62.5 sm:h-[35vh] object-cover rounded-[25px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{scale:1.1, marginTop:'10%',width:"95%"}}
                />

              ))}

            </div>

          </div>

        </div>

      )}

    </motion.div>
  )
}