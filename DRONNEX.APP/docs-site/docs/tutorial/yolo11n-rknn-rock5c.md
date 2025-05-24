---
sidebar_position: 1
---

# Run Yolo11n on Rock with RKNN

Refer to **Radxa rock 5C** [documentation](https://docs.radxa.com/en/rock5/rock5c/app-development/rknn_ultralytics) for futher details.

## Introduction
This guid is using Radxa [4k camera](https://radxa.com/products/accessories/camera4k/) camera to run Yolo11n on [Rock 5C](https://radxa.com/products/rock5/5c/) in realtime ( above 25FPS). This is very important for any visual based robotic need realtime decision making based on what it see.

## Prerequirement
**Hardware:**
- Rock chip board like [Rock 5C](https://radxa.com/products/rock5/5c/)

**Wiring guide** 
- `Rock VIN` → `5V`
- `Rock Ground` → `Ground`

## Run Code

- Create Virtual Environment

- Install ultralytics:  
```bash
pip3 install -U ultralytics
```

- Test Basic prediction: 
```bash
yolo predict model='./yolo11n_rknn_model' source='https://ultralytics.com/images/bus.jpg'
```

- Create python file:
```bash
nano run.py
```

- Add code below:

```jsx title="run.py"
import cv2
import time
from ultralytics import YOLO
import numpy as np

# Load the RKNN model (must be in the same directory as the script)
model = YOLO("yolo11n_3588_rknn_model")

# Open the Radxa 4K MIPI-CSI camera (usually /dev/video0)
cap = cv2.VideoCapture("/dev/video11", cv2.CAP_V4L2)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 640)

if not cap.isOpened():
    raise RuntimeError("❌ Failed to open Radxa 4K camera at /dev/video0")

# FPS monitor
frame_count = 0
start_time = time.time()

print("Running YOLOv11n Inference (press 'Q' to quit)...")

try:
    while True:
        ret, frame = cap.read()
        if not ret:
            print("⚠️ Camera frame capture failed.")
            continue

        # Resize to 640x640 and convert to RGB
        resized = cv2.resize(frame, (640, 640))

        # rgb = cv2.cvtColor(resized, cv2.COLOR_BGR2RGB)

        # Inference using RKNN-accelerated YOLOv11
        results = model.predict(source=resized, imgsz=640, stream=False)

        # Annotate and display
        annotated_frame = results[0].plot()
        cv2.imshow("YOLOv11n Detection", annotated_frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

        # FPS Calculation
        frame_count += 1
        elapsed = time.time() - start_time
        if elapsed >= 1.0:
            fps = frame_count / elapsed
            print(f"🔄 FPS: {fps:.2f}")
            frame_count = 0
            start_time = time.time()

except KeyboardInterrupt:
    print("Inference stopped by user.")

finally:
    cap.release()
    cv2.destroyAllWindows()

```

## Results

