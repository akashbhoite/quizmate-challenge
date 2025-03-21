
import React from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award, Crown, Brain } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LeaderboardEntry {
  id: string;
  rank: number;
  username: string;
  avatar?: string;
  score: number;
  quizzesTaken: number;
  winRate: number;
  specialty: string;
  medal?: "gold" | "silver" | "bronze";
  achievement?: string;
}

const leaderboardData: LeaderboardEntry[] = [
  {
    id: "1",
    rank: 1,
    username: "BrainMaster",
    avatar: "/placeholder.svg",
    score: 9850,
    quizzesTaken: 142,
    winRate: 94,
    specialty: "Mathematics",
    medal: "gold",
    achievement: "Genius Level"
  },
  {
    id: "2",
    rank: 2,
    username: "QuizWizard",
    avatar: "/placeholder.svg",
    score: 9340,
    quizzesTaken: 128,
    winRate: 89,
    specialty: "Science",
    medal: "silver",
    achievement: "Science Expert"
  },
  {
    id: "3",
    rank: 3,
    username: "Historianista",
    avatar: "/placeholder.svg",
    score: 8970,
    quizzesTaken: 115,
    winRate: 87,
    specialty: "History",
    medal: "bronze",
    achievement: "History Buff"
  },
  {
    id: "4",
    rank: 4,
    username: "LitMaster64",
    score: 8450,
    quizzesTaken: 108,
    winRate: 82,
    specialty: "Literature"
  },
  {
    id: "5",
    rank: 5,
    username: "GeoGenius",
    score: 7920,
    quizzesTaken: 95,
    winRate: 79,
    specialty: "Geography"
  },
  {
    id: "6",
    rank: 6,
    username: "MathMagician",
    score: 7680,
    quizzesTaken: 92,
    winRate: 76,
    specialty: "Mathematics"
  },
  {
    id: "7",
    rank: 7,
    username: "ScienceSage",
    score: 7450,
    quizzesTaken: 87,
    winRate: 74,
    specialty: "Science"
  },
  {
    id: "8",
    rank: 8,
    username: "BookWorm23",
    score: 7120,
    quizzesTaken: 83,
    winRate: 71,
    specialty: "Literature"
  },
  {
    id: "9",
    rank: 9,
    username: "HistoryHero",
    score: 6890,
    quizzesTaken: 79,
    winRate: 69,
    specialty: "History"
  },
  {
    id: "10",
    rank: 10,
    username: "GlobeTrotter",
    score: 6740,
    quizzesTaken: 76,
    winRate: 67,
    specialty: "Geography"
  }
];

const renderMedal = (medal?: "gold" | "silver" | "bronze") => {
  if (!medal) return null;
  
  let icon;
  let color;
  
  switch (medal) {
    case "gold":
      icon = <Trophy className="text-yellow-500" />;
      color = "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      break;
    case "silver":
      icon = <Medal className="text-slate-400" />;
      color = "bg-slate-400/10 text-slate-400 border-slate-400/20";
      break;
    case "bronze":
      icon = <Award className="text-amber-600" />;
      color = "bg-amber-600/10 text-amber-600 border-amber-600/20";
      break;
  }
  
  return (
    <Badge variant="outline" className={`ml-2 ${color}`}>
      <span className="flex items-center gap-1">
        {icon}
        {medal.charAt(0).toUpperCase() + medal.slice(1)}
      </span>
    </Badge>
  );
};

const Leaderboard = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Global Leaderboard</h1>
          <p className="text-foreground/70">
            Top quiz champions from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {leaderboardData.slice(0, 3).map((entry) => (
            <Card key={entry.id} className="overflow-hidden">
              <div className={`h-2 ${
                entry.rank === 1 
                  ? "bg-yellow-500" 
                  : entry.rank === 2 
                    ? "bg-slate-400" 
                    : "bg-amber-600"
              }`} />
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-2">
                  {entry.rank === 1 ? (
                    <Crown className="h-8 w-8 text-yellow-500" />
                  ) : entry.rank === 2 ? (
                    <Medal className="h-8 w-8 text-slate-400" />
                  ) : (
                    <Award className="h-8 w-8 text-amber-600" />
                  )}
                </div>
                <CardTitle className="text-lg flex items-center justify-center gap-2">
                  <span>#{entry.rank}</span>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={entry.avatar} alt={entry.username} />
                    <AvatarFallback>{entry.username.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span>{entry.username}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold">{entry.score.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Score</div>
                
                <div className="mt-4 flex justify-between text-sm">
                  <div>
                    <div className="font-medium">{entry.quizzesTaken}</div>
                    <div className="text-muted-foreground">Quizzes</div>
                  </div>
                  <div>
                    <div className="font-medium">{entry.winRate}%</div>
                    <div className="text-muted-foreground">Win Rate</div>
                  </div>
                  <div>
                    <div className="font-medium flex items-center">
                      <Brain className="h-3 w-3 mr-1" />
                      {entry.specialty}
                    </div>
                    <div className="text-muted-foreground">Specialty</div>
                  </div>
                </div>
                
                {entry.achievement && (
                  <Badge className="mt-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                    {entry.achievement}
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Leaderboard Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Rank</TableHead>
                  <TableHead>Player</TableHead>
                  <TableHead className="text-right">Score</TableHead>
                  <TableHead className="text-right">Win Rate</TableHead>
                  <TableHead className="text-right">Specialty</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardData.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <span>#{entry.rank}</span>
                        {entry.medal && (
                          <span className="ml-1">
                            {entry.rank === 1 ? (
                              <Trophy className="h-4 w-4 text-yellow-500" />
                            ) : entry.rank === 2 ? (
                              <Medal className="h-4 w-4 text-slate-400" />
                            ) : entry.rank === 3 ? (
                              <Award className="h-4 w-4 text-amber-600" />
                            ) : null}
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={entry.avatar} alt={entry.username} />
                          <AvatarFallback>{entry.username.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span>{entry.username}</span>
                        {renderMedal(entry.medal)}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{entry.score.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{entry.winRate}%</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className="font-normal">
                        {entry.specialty}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </Layout>
  );
};

export default Leaderboard;
