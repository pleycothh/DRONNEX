---
sidebar_position: 4
---

# Mavlink

## Introduction
Build Mavlink connection between companion computer to flight controller

Refer to document: [Ardupilot.org Companion Computers](https://ardupilot.org/dev/docs/companion-computers.html)


## Prerequirement

**Hardware:**
- companion computer
  - [Rasbarry Pi zero 2w](https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/)
  - [Radxa 5c](https://radxa.com/products/rock5/5c/) (optional)

- Flight controller
  - [Speedybee F405 mini](https://www.speedybee.com/speedybee-f405-mini-bls-35a-20x20-stack/) 
  - [Holybro 6c](https://holybro.com/products/pixhawk-6c?srsltid=AfmBOorzLGtAawUIBgnl6UK1f2A-d48AAH4sWbipNH_3nSAvmrIaDnDy) (optional)


## Install System

:::caution
Always ensure your workspace is safe, power sources are controlled, and surroundings are clear before testing or experimentation.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="pi" label="Pi Zero 2W" default>
  - Optional: Enable auto-login to skip manual login
  ```bash
   System Options -> Boot / Auto Login -> Console Autologin
  ```
   OR 
  ```bash
    sudo mkdir -p /etc/systemd/system/getty@tty1.service.d

    cat <<EOF | sudo tee /etc/systemd/system/getty@tty1.service.d/autologin.conf > /dev/null
    [Service]
    ExecStart=
    ExecStart=-/sbin/agetty --autologin pi --noclear %I \$TERM
    EOF

    sudo systemctl daemon-reexec
    sudo systemctl restart getty@tty1
  ```

  - Update system

  ```bash
  sudo apt update && sudo apt upgrade -y
  ```

  - Install MAVLink support
  ``` bash
  pip install pymavlink
  ```

  - Confirm work
  ``` bash
  python3 -c "from pymavlink import mavutil; print(' All working:  pymavlink')"  
  ```

  - Check USB Info
  ``` bash
  ls /dev/ttyACM*
  dmesg | grep ttyACM # cdc_acm 1-1:1.0: ttyACM0: USB ACM device
  ```

  - mavlink connect
  ``` bash
  mavproxy.py --master=/dev/ttyACM0 --baud=115200 # mavlink connect
  ```
 Reference document: [ardupilot mavlink via pi](https://ardupilot.org/dev/docs/raspberry-pi-via-mavlink.html)

  </TabItem>
    <TabItem value="5c" label="Radxa 5C">
      - Optional: Enable auto-login to skip manual login
      ```bash
      System Options -> Boot / Auto Login -> Console Autologin
      ```
      OR 
      ```bash
        sudo mkdir -p /etc/systemd/system/getty@tty1.service.d

        cat <<EOF | sudo tee /etc/systemd/system/getty@tty1.service.d/autologin.conf > /dev/null
        [Service]
        ExecStart=
        ExecStart=-/sbin/agetty --autologin pi --noclear %I \$TERM
        EOF

        sudo systemctl daemon-reexec
        sudo systemctl restart getty@tty1
      ```

      - Update system

      ```bash
      sudo apt update && sudo apt upgrade -y
      ```

      - Install MAVLink support
      ``` bash
      pip install pymavlink
      ```
   
    </TabItem>
</Tabs>



