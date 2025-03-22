import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Upload, FileText, BookOpen, Copy, Download, X, CheckCheck, Loader2, Send, Bot, MessageSquare, User } from "lucide-react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const IndividualLearning = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [summary, setSummary] = useState("");
  const [flashcards, setFlashcards] = useState<Array<{question: string, answer: string}>>([]);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("summary");
  const [question, setQuestion] = useState("");
  const [isAskingQuestion, setIsAskingQuestion] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{role: "user" | "bot", content: string}>>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  
  const clearFile = () => {
    setFile(null);
    setSummary("");
    setFlashcards([]);
    setChatMessages([]);
  };
  
  const handleUpload = () => {
    if (!file) return;
    
    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      setIsAnalyzing(true);
      
      // Simulate document analysis and generate summary and flashcards
      setTimeout(() => {
        setIsAnalyzing(false);
        
        // Mock data - in a real app, this would come from API
        setSummary("Mitochondria are membrane-bound cell organelles that generate most of the chemical energy needed to power the cell's biochemical reactions. Chemical energy produced by the mitochondria is stored in a small molecule called adenosine triphosphate (ATP). Mitochondria contain their own small chromosomes, and this DNA is distinct from the nuclear DNA.");
        
        setFlashcards([
          {
            question: "What are mitochondria?",
            answer: "Membrane-bound cell organelles that generate most of the chemical energy needed to power the cell's biochemical reactions."
          },
          {
            question: "What is ATP?",
            answer: "Adenosine triphosphate - a small molecule where chemical energy produced by the mitochondria is stored."
          },
          {
            question: "What unique genetic feature do mitochondria have?",
            answer: "Mitochondria contain their own small chromosomes with DNA that is distinct from the nuclear DNA."
          },
          {
            question: "What is the main function of mitochondria?",
            answer: "To generate chemical energy (in the form of ATP) to power the cell's biochemical reactions."
          },
          {
            question: "Where is the energy from mitochondria stored?",
            answer: "In a small molecule called adenosine triphosphate (ATP)."
          }
        ]);

        // Add initial bot message
        setChatMessages([
          {
            role: "bot",
            content: "Hello! I've analyzed your document about mitochondria. Feel free to ask me any questions about the content!"
          }
        ]);
      }, 2000);
    }, 1500);
  };
  
  const flipCard = (index: number) => {
    if (flippedCard === index) {
      setFlippedCard(null);
    } else {
      setFlippedCard(index);
    }
  };

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || !summary) return;

    // Add user message to chat
    setChatMessages(prev => [...prev, { role: "user", content: question }]);
    setIsAskingQuestion(true);
    
    // Simulate AI thinking and response
    setTimeout(() => {
      let response = "";
      const lowerQuestion = question.toLowerCase();
      
      // Simple pattern matching for demo purposes
      if (lowerQuestion.includes("mitochondria") && lowerQuestion.includes("what")) {
        response = "Mitochondria are membrane-bound cell organelles that generate most of the chemical energy needed to power the cell's biochemical reactions.";
      } else if (lowerQuestion.includes("atp")) {
        response = "ATP (Adenosine triphosphate) is a small molecule where chemical energy produced by the mitochondria is stored, which is used to power biochemical reactions in the cell.";
      } else if (lowerQuestion.includes("dna") || lowerQuestion.includes("genetic")) {
        response = "Mitochondria contain their own small chromosomes with DNA that is distinct from the nuclear DNA. This is unique as most other organelles do not have their own genetic material.";
      } else if (lowerQuestion.includes("function")) {
        response = "The main function of mitochondria is to generate chemical energy in the form of ATP to power the cell's biochemical reactions.";
      } else {
        response = "I don't have specific information about that in the document. Would you like to ask something else about mitochondria?";
      }
      
      // Add bot response to chat
      setChatMessages(prev => [...prev, { role: "bot", content: response }]);
      setIsAskingQuestion(false);
      setQuestion("");
      
      // Scroll to bottom of chat
      setTimeout(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }, 1500);
  };

  // Scroll to bottom when new messages are added
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);
  
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto py-8"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Individual Learning</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload documents to get AI-powered summaries and study flashcards to enhance your learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload size={20} className="text-primary" />
                  Document Upload
                </CardTitle>
                <CardDescription>
                  Upload your study materials to generate summaries and flashcards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={cn(
                    "border-2 border-dashed rounded-xl p-8 transition-all",
                    isDragging ? "border-primary bg-primary/5" : "border-border",
                    file ? "bg-muted/50" : ""
                  )}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {!file ? (
                    <div className="text-center">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center"
                        animate={{
                          scale: [1, 1.05, 1],
                          transition: { 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                          }
                        }}
                      >
                        <Upload size={28} className="text-primary" />
                      </motion.div>
                      <p className="text-lg font-medium mb-2">Drag & drop your document</p>
                      <p className="text-muted-foreground mb-4">Support for PDF, DOCX, and TXT files</p>
                      
                      <Label 
                        htmlFor="file-upload" 
                        className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md cursor-pointer inline-block"
                      >
                        Browse Files
                      </Label>
                      <Input 
                        id="file-upload" 
                        type="file" 
                        className="hidden" 
                        onChange={handleFileChange}
                        accept=".pdf,.docx,.txt"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <FileText size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium truncate max-w-[200px]">{file.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={clearFile}
                        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-3">
                <Button 
                  variant="outline" 
                  disabled={!file || isUploading || isAnalyzing}
                  onClick={clearFile}
                >
                  Clear
                </Button>
                <Button 
                  disabled={!file || isUploading || isAnalyzing}
                  onClick={handleUpload}
                  className="min-w-[120px]"
                >
                  {isUploading ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : isAnalyzing ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Upload size={16} className="mr-2" />
                      Process
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
            
            {summary && (
              <Card className="mb-6">
                <CardHeader>
                  <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid grid-cols-3 mb-2">
                      <TabsTrigger value="summary" className="flex items-center gap-2">
                        <FileText size={16} />
                        Summary
                      </TabsTrigger>
                      <TabsTrigger value="chat" className="flex items-center gap-2">
                        <MessageSquare size={16} />
                        Q&A Chat
                      </TabsTrigger>
                      <TabsTrigger value="flashcards" className="flex items-center gap-2 md:hidden">
                        <Copy size={16} />
                        Flashcards
                      </TabsTrigger>
                    </TabsList>
                
                    <TabsContent value="summary" className="mt-0">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Textarea 
                          value={summary} 
                          readOnly 
                          className="min-h-32 resize-none"
                        />
                      </motion.div>
                      <div className="flex justify-end mt-4">
                        <Button variant="outline" size="sm">
                          <Download size={16} className="mr-2" />
                          Download Summary
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="chat" className="mt-0">
                      <div className="flex flex-col h-[350px]">
                        <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-3 bg-muted/30 rounded-lg">
                          {chatMessages.map((msg, idx) => (
                            <div 
                              key={idx} 
                              className={cn(
                                "flex gap-3 max-w-[80%]",
                                msg.role === "user" ? "ml-auto" : ""
                              )}
                            >
                              <div 
                                className={cn(
                                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                                  msg.role === "user" 
                                    ? "bg-primary text-primary-foreground order-2" 
                                    : "bg-secondary text-secondary-foreground"
                                )}
                              >
                                {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
                              </div>
                              <div 
                                className={cn(
                                  "py-2 px-3 rounded-lg",
                                  msg.role === "user" 
                                    ? "bg-primary text-primary-foreground" 
                                    : "bg-secondary text-secondary-foreground"
                                )}
                              >
                                {msg.content}
                              </div>
                            </div>
                          ))}
                          <div ref={chatEndRef} />
                        </div>
                        
                        <form onSubmit={handleQuestionSubmit} className="flex gap-2">
                          <Input
                            placeholder="Ask a question about the document..."
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            disabled={isAskingQuestion || !summary}
                            className="flex-1"
                          />
                          <Button 
                            type="submit" 
                            disabled={isAskingQuestion || !question.trim() || !summary}
                          >
                            {isAskingQuestion ? (
                              <Loader2 size={16} className="animate-spin" />
                            ) : (
                              <Send size={16} />
                            )}
                          </Button>
                        </form>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="flashcards" className="mt-0 md:hidden">
                      <div className="space-y-4">
                        {flashcards.map((card, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="perspective-500"
                          >
                            <motion.div
                              className={cn(
                                "relative cursor-pointer w-full rounded-lg transition-all duration-500",
                                "h-[140px] sm:h-[120px]"
                              )}
                              onClick={() => flipCard(index)}
                              animate={{ rotateX: flippedCard === index ? 180 : 0 }}
                            >
                              <div
                                className={cn(
                                  "absolute inset-0 backface-hidden rounded-lg p-4 flex flex-col",
                                  "bg-card border border-border shadow",
                                  flippedCard === index ? "opacity-0" : "opacity-100"
                                )}
                              >
                                <div className="flex justify-between items-start">
                                  <span className="text-sm font-medium text-muted-foreground">Question</span>
                                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-xs font-medium text-primary">{index + 1}</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center flex-1">
                                  <p className="font-medium text-center">{card.question}</p>
                                </div>
                              </div>
                              
                              <div
                                className={cn(
                                  "absolute inset-0 backface-hidden rounded-lg p-4 flex flex-col",
                                  "bg-primary/5 border border-primary/20 shadow",
                                  "transform rotateX-180"
                                )}
                              >
                                <div className="flex justify-between items-start">
                                  <span className="text-sm font-medium text-primary">Answer</span>
                                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                    <CheckCheck size={14} className="text-primary" />
                                  </div>
                                </div>
                                <div className="flex items-center justify-center flex-1">
                                  <p className="text-foreground text-center">{card.answer}</p>
                                </div>
                              </div>
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardHeader>
                <CardContent>
                  {/* Card content is now handled within the Tabs component */}
                </CardContent>
              </Card>
            )}
          </div>
          
          <div className="hidden md:block">
            {flashcards.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Copy size={20} className="text-primary" />
                    Generated Flashcards
                  </CardTitle>
                  <CardDescription>
                    Click on cards to flip and reveal answers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    {flashcards.map((card, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="perspective-500"
                      >
                        <motion.div
                          className={cn(
                            "relative cursor-pointer w-full rounded-lg transition-all duration-500",
                            "h-[140px] sm:h-[120px]"
                          )}
                          onClick={() => flipCard(index)}
                          animate={{ rotateX: flippedCard === index ? 180 : 0 }}
                        >
                          <div
                            className={cn(
                              "absolute inset-0 backface-hidden rounded-lg p-4 flex flex-col",
                              "bg-card border border-border shadow",
                              flippedCard === index ? "opacity-0" : "opacity-100"
                            )}
                          >
                            <div className="flex justify-between items-start">
                              <span className="text-sm font-medium text-muted-foreground">Question</span>
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-xs font-medium text-primary">{index + 1}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-center flex-1">
                              <p className="font-medium text-center">{card.question}</p>
                            </div>
                          </div>
                          
                          <div
                            className={cn(
                              "absolute inset-0 backface-hidden rounded-lg p-4 flex flex-col",
                              "bg-primary/5 border border-primary/20 shadow",
                              "transform rotateX-180"
                            )}
                          >
                            <div className="flex justify-between items-start">
                              <span className="text-sm font-medium text-primary">Answer</span>
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                <CheckCheck size={14} className="text-primary" />
                              </div>
                            </div>
                            <div className="flex items-center justify-center flex-1">
                              <p className="text-foreground text-center">{card.answer}</p>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p className="text-sm text-muted-foreground">{flashcards.length} flashcards generated</p>
                  <Button variant="outline" size="sm">
                    <Download size={16} className="mr-2" />
                    Export Flashcards
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default IndividualLearning;
