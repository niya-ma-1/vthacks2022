import torch
model = torch.load('./model')
model.predict('./mushroom1.png')[0]