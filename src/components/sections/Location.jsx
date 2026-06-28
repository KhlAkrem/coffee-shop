import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Location = ({ id }) => {
  const [mapCenter, setMapCenter] = useState([36.755263, 3.044609]); // Didouche Mourad, Algiers
  const [todayHours, setTodayHours] = useState([]);

  useEffect(() => {
    const today = new Date();
    const day = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const now = hours * 60 + minutes;

    const openingHours = [
      { day: 'Monday', open: 420, close: 1320, label: 'Monday–Friday' }, // 7:00 AM = 420, 10:00 PM = 1320
      { day: 'Tuesday', open: 420, close: 1320 },
      { day: 'Wednesday', open: 420, close: 1320 },
      { day: 'Thursday', open: 420, close: 1320 },
      { day: 'Friday', open: 420, close: 1320 },
      { day: 'Saturday', open: 480, close: 1380 }, // 8:00 AM = 480, 11:00 PM = 1380
      { day: 'Sunday', open: 540, close: 1260 }, // 9:00 AM = 540, 9:00 PM = 1260
    ];

    // Fix Saturday closing: 11:00 PM = 23*60 = 1380
    openingHours[5].close = 1380;

    const todayObj = openingHours[day];
    const isOpen = now >= todayObj.open && now <= todayObj.close;
    const status = isOpen ? 'Open Now' : 'Closed';
    const statusClass = isOpen ? 'bg-gold-accent/20 text-gold-accent' : 'bg-error/20 text-error';

    setTodayHours(openingHours.map(h => ({
      ...h,
      isToday: h.day === todayObj.day,
      isOpenNow: now >= h.open && now <= h.close,
    })));
  }, []);

  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg z-0">
            <MapContainer
              center={mapCenter}
              zoom={15}
              style={{ height: '100%', width: '100%', zIndex: 0 }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={mapCenter}>
                <Popup>
                  <div className="text-center">
                    <h3 className="font-medium text-text-primary">Coffee Shop</h3>
                    <p className="text-text-secondary">Didouche Mourad Street, Algiers</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl">Find Us</h2>
            <p className="text-text-secondary mb-4">
              Located in the heart of Algiers, just steps from the bustling Didouche Mourad street.
            </p>

            {/* Opening Hours */}
            <div className="space-y-4">
              <h3 className="font-semibold text-text-primary">Opening Hours</h3>
              <div className="space-y-2">
                {todayHours.map((day, index) => (
                  <div
                    key={day.day}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg bg-surface/50 backdrop-blur-sm ${day.isToday ? 'border-2 border-gold-accent' : 'border border-surface/20'}`}
                  >
                    <div className="flex-1 flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-gold-accent/20 rounded-full">
                        <span className="text-sm text-text-primary font-semibold leading-none">{day.day.slice(0, 3)}</span>
                      </div>
                      <div>
                        <p className="text-text-sm font-medium">{day.day}</p>
                        <p className="text-text-xs text-text-muted">
                          {new Date(`1970-01-01T${String(Math.floor(day.open / 60)).padStart(2, '0')}:${String(day.open % 60).padStart(2, '0')}:00Z`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} -
                          {new Date(`1970-01-01T${String(Math.floor(day.close / 60)).padStart(2, '0')}:${String(day.close % 60).padStart(2, '0')}:00Z`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      {day.isToday && (
                        <span className={`${day.isOpenNow ? 'bg-success/20 text-success' : 'bg-error/20 text-error'} px-2 py-0.5 rounded text-xs`}>
                          {day.isOpenNow ? 'Open Now' : 'Closed'}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-text-primary">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FiMapPin className="h-4 w-4 text-gold-accent" />
                  <div>
                    <p className="text-text-sm font-medium">Address</p>
                    <p className="text-text-secondary">Didouche Mourad Street, Algiers, Algeria</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="h-4 w-4 text-gold-accent" />
                  <div>
                    <p className="text-text-sm font-medium">Phone</p>
                    <p className="text-text-secondary">+213 21 123 456</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMail className="h-4 w-4 text-gold-accent" />
                  <div>
                    <p className="text-text-sm font-medium">Email</p>
                    <p className="text-text-secondary">info@coffee.dz</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.google.com/maps/search/36.755263,+3.044609?entry=tts&g_ep=EgoyMDI2MDYyNC4wIPu8ASoASAFQAw%3D%3D&skid=95ef0dfa-504614-c5fb6b0b4052"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 bg-gold-accent/20 text-gold-accent border border-gold-accent/20 rounded-lg hover:bg-gold-accent/30 transition-colors"
              >
                View on Google Maps
              </a>
              <a
                href="https://www.waze.com/ul?q=36.755263%2C3.044609"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 py-3 bg-gold-accent/20 text-gold-accent border border-gold-accent/20 rounded-lg hover:bg-gold-accent/30 transition-colors"
              >
                Open in Waze
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;