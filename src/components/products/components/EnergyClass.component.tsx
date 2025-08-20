import React, { memo } from 'react';
import classEnergy from '@/assets/card.svg';

interface EnergyClassProps {
  energyClass: string;
}

export const EnergyClass: React.FC<EnergyClassProps> = memo(
  ({ energyClass }) => {
    return (
      <div className="flex items-center mb-6">
        <span className="text-text text-sm">Klasa energetyczna:</span>
        <div className="ml-2 flex items-center">
          <div className="relative inline-block">
            <img src={classEnergy} alt="class energy" />
            <span className="absolute inset-0 flex items-center justify-start ml-1 text-white text-sm">
              {energyClass}
            </span>
          </div>
        </div>
      </div>
    );
  }
);

EnergyClass.displayName = 'EnergyClass';
