import React, { useState } from 'react';

import './AverageCalculator.css';

const AverageCalculator = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [average, setAverage] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedNominalSpeed, setSelectedNominalSpeed] = useState('');
  const [selectedSensor, setSelectedSensor] = useState(null);

  const sensorModels = [
    {
      model: 'GBP Cabine',
      nominalSpeeds: [
        {"speed":24.0,"minSpeed":38.4,"maxSpeed":42.0,"coefficient":0.93},
        {"speed":30.0,"minSpeed":38.4,"maxSpeed":42.0,"coefficient":0.93},
        {"speed":36.0,"minSpeed":45.6,"maxSpeed":51.0,"coefficient":0.93},
        {"speed":37.8,"minSpeed":48.0,"maxSpeed":52.8,"coefficient":0.93},
        {"speed":42.0,"minSpeed":52.8,"maxSpeed":58.8,"coefficient":0.93},
        {"speed":45.0,"minSpeed":57.0,"maxSpeed":63.0,"coefficient":0.93},
        {"speed":48.0,"minSpeed":60.6,"maxSpeed":67.2,"coefficient":0.93},
        {"speed":51.0,"minSpeed":64.2,"maxSpeed":71.4,"coefficient":0.93},
        {"speed":54.0,"minSpeed":68.4,"maxSpeed":75.6,"coefficient":0.93},
        {"speed":60.0,"minSpeed":75.6,"maxSpeed":84.0,"coefficient":0.93},
        {"speed":63.6,"minSpeed":80.4,"maxSpeed":88.8,"coefficient":0.93},
        {"speed":67.2,"minSpeed":82.4,"maxSpeed":94.2,"coefficient":0.93},
        {"speed":72.0,"minSpeed":85.2,"maxSpeed":96.0,"coefficient":0.93},
        {"speed":75.0,"minSpeed":87.6,"maxSpeed":96.0,"coefficient":0.93},
        {"speed":79.2,"minSpeed":92.4,"maxSpeed":99.0,"coefficient":0.93},
        {"speed":84.0,"minSpeed":97.8,"maxSpeed":105.0,"coefficient":0.93},
        {"speed":90.0,"minSpeed":105.0,"maxSpeed":112.8,"coefficient":0.93},
        {"speed":96.0,"minSpeed":111.6,"maxSpeed":120.0,"coefficient":0.93},
        {"speed":105.0,"minSpeed":123.0,"maxSpeed":132.0,"coefficient":0.93}],
    },
    {
      model: 'GB32 Cabine',
      nominalSpeeds: [
        {"speed":30.0,"minSpeed":39.0,"maxSpeed":40.8,"coefficient":0.96},
        {"speed":37.8,"minSpeed":48.6,"maxSpeed":51.6,"coefficient":0.96},
        {"speed":45.0,"minSpeed":58.2,"maxSpeed":61.8,"coefficient":0.96},
        {"speed":51.0,"minSpeed":66.0,"maxSpeed":70.2,"coefficient":0.96},
        {"speed":60.0,"minSpeed":77.4,"maxSpeed":82.2,"coefficient":0.96},
        {"speed":72.0,"minSpeed":93.0,"maxSpeed":96.6,"coefficient":0.96},
        {"speed":75.0,"minSpeed":93.0,"maxSpeed":96.6,"coefficient":0.96},
        {"speed":90.0,"minSpeed":110.4,"maxSpeed":115.2,"coefficient":0.96},
        {"speed":96.0,"minSpeed":117.6,"maxSpeed":122.4,"coefficient":0.96},
        {"speed":105.0,"minSpeed":129.0,"maxSpeed":133.8,"coefficient":0.96},
        {"speed":120.0,"minSpeed":147.0,"maxSpeed":153.0,"coefficient":0.96},
        {"speed":150.0,"minSpeed":172.8,"maxSpeed":180.0,"coefficient":0.96},
        {"speed":180.0,"minSpeed":207.6,"maxSpeed":216.0,"coefficient":0.96},
        {"speed":189.0,"minSpeed":217.8,"maxSpeed":226.8,"coefficient":0.96},
        {"speed":210.0,"minSpeed":241.8,"maxSpeed":252.0,"coefficient":0.96},
        {"speed":240.0,"minSpeed":276.6,"maxSpeed":288.0,"coefficient":0.96},
        {"speed":300.0,"minSpeed":345.6,"maxSpeed":360.0,"coefficient":0.96},
        {"speed":360.0,"minSpeed":414.6,"maxSpeed":432.0,"coefficient":0.96},
        {"speed":378.0,"minSpeed":435.6,"maxSpeed":453.6,"coefficient":0.96},
        {"speed":420.0,"minSpeed":483.6,"maxSpeed":504.0,"coefficient":0.96},
        {"speed":450.0,"minSpeed":518.4,"maxSpeed":540.0,"coefficient":0.96},
        {"speed":480.0,"minSpeed":553.2,"maxSpeed":576.0,"coefficient":0.96},
        {"speed":540.0,"minSpeed":622.2,"maxSpeed":648.0,"coefficient":0.96},
        {"speed":600.0,"minSpeed":690.0,"maxSpeed":705.0,"coefficient":0.96}],
    },
    {
      model: 'B5-A/B5-E',
      nominalSpeeds: [
        {"speed":35,"minSpeed":36.6,"maxSpeed":42.6,"coefficient":0.97},
        {"speed":45,"minSpeed":46.8,"maxSpeed":54.6,"coefficient":0.97},
        {"speed":60,"minSpeed":63.0,"maxSpeed":72.0,"coefficient":0.97},
        {"speed":75,"minSpeed":78.0,"maxSpeed":85.8,"coefficient":0.97},
        {"speed":90,"minSpeed":93.0,"maxSpeed":102.0,"coefficient":0.97},
        {"speed":105,"minSpeed":108.6,"maxSpeed":117.6,"coefficient":0.97},
        {"speed":120,"minSpeed":123.6,"maxSpeed":132.0,"coefficient":0.97},
        {"speed":150,"minSpeed":154.8,"maxSpeed":162.6,"coefficient":0.97}],
    },
  ];

  const handleCalculate = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    const num3 = parseFloat(value3);

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && selectedSensor) {
      const result = (num1 + num2 + num3) / 3;
      const calculatedAverage = result * selectedSensor.coefficient;
      setAverage(calculatedAverage.toFixed(2));
    } else {
      setAverage('');
    }
  };

  const handleModelChange = (e) => {
    const selectedModel = e.target.value;
    setSelectedModel(selectedModel);
    setSelectedNominalSpeed('');
    setSelectedSensor(null);
  };

  const handleNominalSpeedChange = (e) => {
    const selectedNominalSpeed = e.target.value;
    const sensor = sensorModels.find((sensor) => sensor.model === selectedModel);
    const selectedSpeed = sensor.nominalSpeeds.find(
      (speed) => speed.speed === parseInt(selectedNominalSpeed)
    );
    setSelectedNominalSpeed(selectedNominalSpeed);
    setSelectedSensor(selectedSpeed);
  };

  return (
    <div className="average-calculator">
      <h2>Calculadora de Média</h2>
      <div className="input-group">
        <label>Valor 1:</label>
        <input
          type="text"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Valor 2:</label>
        <input
          type="text"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Valor 3:</label>
        <input
          type="text"
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Modelo do Sensor:</label>
        <select value={selectedModel} onChange={handleModelChange}>
          <option value="">Selecione um modelo</option>
          {sensorModels.map((sensor, index) => (
            <option key={index} value={sensor.model}>
              {sensor.model}
            </option>
          ))}
        </select>
      </div>
      {selectedModel && (
        <div className="input-group">
          <label>Velocidade Nominal:</label>
          <select
            value={selectedNominalSpeed}
            onChange={handleNominalSpeedChange}
          >
            <option value="">Selecione uma velocidade nominal</option>
            {sensorModels
              .find((sensor) => sensor.model === selectedModel)
              .nominalSpeeds.map((speed, index) => (
                <option key={index} value={speed.speed}>
                  {speed.speed}
                </option>
              ))}
          </select>
        </div>
      )}
      {selectedSensor && (
        <div className="sensor-info">
          <h3>Informações do Sensor</h3>
          <p>
            <strong>Modelo do Sensor:</strong> {selectedModel}
          </p>
          <p>
            <strong>Velocidade Nominal:</strong> {selectedNominalSpeed}
          </p>
          <p>
            <strong>Velocidade Mínima:</strong> {selectedSensor.minSpeed}
          </p>
          <p>
            <strong>Velocidade Máxima:</strong> {selectedSensor.maxSpeed}
          </p>
          <p>
            <strong>Coeficiente:</strong> {selectedSensor.coefficient}
          </p>
        </div>
      )}
      <button onClick={handleCalculate}>Calcular Média</button>
      {average && (
        <div className="result">
          <h3>Resultado</h3>
          <p>
            <strong>Valor da Média:</strong> {average}
          </p>
          {average >= selectedSensor.minSpeed && average <= selectedSensor.maxSpeed ? (
            <p className="status approved">Status: Aprovado</p>
          ) : (
            <p className="status rejected">Status: Reprovado</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AverageCalculator;