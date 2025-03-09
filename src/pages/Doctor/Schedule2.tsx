
import React, { useState } from 'react';

const Schedule2 = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [patientCount, setPatientCount] = useState<number>(1);
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <div>

    </div>
  )
}
export default Schedule2;