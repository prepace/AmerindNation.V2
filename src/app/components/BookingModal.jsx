/* 
    Dynamically render a script to use the booking form for certain components and pages
*/

function BookingModal({ onModalClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-xs transform transition-all duration-300  z-50" onClick={onModalClose}>
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 h-[90vh] flex flex-col relative" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="absolute top-4 right-4 text-black text-2xl font-bold" onClick={onModalClose}>
              &times;
            </button>

            {/* Booking Form */}
              <div className="p-6 h-full"><iframe src="https://api.leadconnectorhq.com/widget/booking/6xTXDgD1BhDbkg9vUuzf" className="w-full h-full border-none" scrolling="yes" title="Booking Form"></iframe></div>
          </div>
        </div>
  )
}
export default BookingModal