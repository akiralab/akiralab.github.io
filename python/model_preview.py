import numpy as np
import os, glob

paths = glob.glob('model/*.onnx')

for path in paths:
    print('path: {}, size={:.1f}MB'.format(path, os.path.getsize(path)/(1024*1024)))
