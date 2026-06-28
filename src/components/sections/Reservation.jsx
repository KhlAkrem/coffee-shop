import { useState } from 'react';
import { toast } from 'react-hot-toast';

const Reservation = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
    specialRequests: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (formData.guests < 1) newErrors.guests = 'Guest count must be at least 1';
    return Object.keys(newErrors).length === 0 ? null : newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate network delay
    setTimeout(() => {
      toast.success('Your reservation is confirmed! We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 1,
        specialRequests: '',
      });
      setErrors({});
      setIsSubmitting(false);
    }, 1500);
  };

  // Generate time options from 7:00 AM to 10:00 PM in 30-min intervals
  const timeOptions = [];
  for (let h = 7; h <= 22; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hour = h % 12 === 0 ? 12 : h % 12;
      const ampm = h < 12 ? 'AM' : 'PM';
      const time = `${hour.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')} ${ampm}`;
      timeOptions.push(time);
    }
  };

  return (
    <section id={id} className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-display text-4xl md:text-5xl text-center text-text-primary mb-12">
          Reserve Your Table
        </h2>
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border border-surface/20 bg-background-primary/50 text-text-primary placeholder:text-text-muted focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/20 ${
                  errors.name ? 'border-error' : ''
                }`}
                placeholder="Enter your full name"
                required
              />
              {errors.name && <p className="text-text-xs text-error mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border border-surface/20 bg-background-primary/50 text-text-primary placeholder:text-text-muted focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/20 ${
                  errors.email ? 'border-error' : ''
                }`}
                placeholder="Enter your email"
                required
              />
              {errors.email && <p className="text-text-xs text-error mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-text-sm font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border border-surface/20 bg-background-primary/50 text-text-primary placeholder:text-text-muted focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/20 ${
                  errors.phone ? 'border-error' : ''
                }`}
                placeholder="Enter your phone number"
                required
              />
              {errors.phone && <p className="text-text-xs text-error mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-text-sm font-medium mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border border-surface/20 bg-background-primary/50 text-text-primary placeholder:text-text-muted focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/20 ${
                  errors.date ? 'border-error' : ''
                }`}
                min={new Date().toISOString().split('T')[0]}
                required
              />
              {errors.date && <p className="text-text-xs text-error mt-1">{errors.date}</p>}
            </div>
            <div>
              <label className="block text-text-sm font-medium mb-2">Time</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border border-surface/20 bg-background-primary/50 text-text-primary placeholder:text-text-muted focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/20 ${
                  errors.time ? 'border-error' : ''
                }`}
                required
              >
                <option value="">Select a time</option>
                {timeOptions.map(time => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {errors.time && <p className="text-text-xs text-error mt-1">{errors.time}</p>}
            </div>
            <div>
              <label className="block text-text-sm font-medium mb-2">Number of Guests</label>
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                max="12"
                className={`w-full px-4 py-3 rounded-lg border border-surface/20 bg-background-primary/50 text-text-primary placeholder:text-text-muted focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/20 ${
                  errors.guests ? 'border-error' : ''
                }`}
              />
              {errors.guests && <p className="text-text-xs text-error mt-1">{errors.guests}</p>}
            </div>
          </div>

          <div>
            <label className="block text-text-sm font-medium mb-2">Special Requests</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-3 rounded-lg border border-surface/20 bg-background-primary/50 text-text-primary placeholder:text-text-muted focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/20 ${
                errors.specialRequests ? 'border-error' : ''
              }`}
              placeholder="Enter any special requests (allergies, occasion, etc.)"
            />
            {errors.specialRequests && <p className="text-text-xs text-error mt-1">{errors.specialRequests}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 text-lg font-medium bg-gold-accent text-background-primary hover:bg-gold-light transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Reservation'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;